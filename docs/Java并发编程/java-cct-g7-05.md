---
autoGroup-7: 自旋锁
title: MCS锁
---

### MCS锁

1. 和CLH锁类似
2. CLH锁是判断上一个节点锁的释放状态，而MCS是判断自己这个节点是否可以运行
3. 与CLH相比，MCS更好一些，因为MCS只自旋自己的变量，CLH自旋他人的变量
4. 对于CPU来说，自旋自身变量的状态等待通知，比自旋他人变量更节省资源，但是通过Java来实现，仅仅是逻辑上实现而已，很难做到自旋自身变量，所以demo只是提供简单参照而已

``` java
package com.mrzhang.javalearn.bingfa.demo_05;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

/**
 * MCS锁的简单实现（一）
 *
 * @author 91MrZhang on 2020/8/15
 */
public class MCSLock {

    public class MCSNode {
        //控制下一个节点是否waiting
        public volatile boolean nextIsWaiting = false;
    }

    public MCSLock() {
        //初始化0号节点，第一个进入的线程不用wait
        MCSNode zeroNode = new MCSNode();
        zeroNode.nextIsWaiting = false;
        tail.set(zeroNode);
    }

    private AtomicReference<MCSNode> tail = new AtomicReference<>();
    private ThreadLocal<MCSNode> curNode = ThreadLocal.withInitial(MCSNode::new);

    public void lock() {
        MCSNode cNode = curNode.get();
        //控制下一个节点线程的状态
        cNode.nextIsWaiting = true;
        //取得前一个节点，并观测前一个节点是否通知自己结束等待
        MCSNode pNode = tail.getAndSet(cNode);
        while (pNode.nextIsWaiting) {

        }

    }

    public void unlock() {
        MCSNode cNode = curNode.get();
        //通知下一个节点，结束等待
        cNode.nextIsWaiting = false;
    }


    // 测试方法
    public void m() {
        String tName = Thread.currentThread().getName();
        lock();
        for (int i = 0; i < 3; i++) {
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(tName + "->心跳第" + (i + 1) + "次");
        }
        unlock();
    }

    public static void main(String[] args) {
        MCSLock mcsLock = new MCSLock();
        new Thread(mcsLock::m, "线程1号").start();
        new Thread(mcsLock::m, "线程2号").start();
        new Thread(mcsLock::m, "线程3号").start();
        new Thread(mcsLock::m, "线程4号").start();
        new Thread(mcsLock::m, "线程5号").start();
    }
}

```