---
autoGroup-7: 自旋锁
title: CLH锁
---

### CLH锁

1. 和排队锁类似，需要顺序排队
2. 增加了一个**前节点概念**，C要拿锁，需要看B的释放没有；B要拿锁；需要看A的释放没有，A要拿锁，直接锁即可
3. A执行完成之后，锁改为False，B看到A执行完了，开始执行，B再执行完了，把锁设置成Flase，C看到了再开始执行
4. 这样的好处就是，每个线程只需要自旋前一个线程的标志位即可，减低了自旋消耗

``` java
package com.mrzhang.javalearn.bingfa.demo_05;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

/**
 * CLH锁的简单实现（一）
 *
 * @author 91MrZhang on 2020/8/15
 */
public class CLHLock {

    /**
     * 节点
     */
    public class CLHNode {
        public volatile boolean lock = false;
    }

    // ThreadLocal相当于线程的变量表，每个线程之间相互独立
    private ThreadLocal<CLHNode> curCLHNode = ThreadLocal.withInitial(CLHNode::new);

    //tail要保证每个线程看到都是自己的pre节点
    private AtomicReference<CLHNode> tail = new AtomicReference<>();

    public void lock() {
        CLHNode curNode = curCLHNode.get();
        curNode.lock = true;
        CLHNode pre = tail.getAndSet(curNode);
        if (pre != null) {
            while (pre.lock) {

            }
        }
    }

    public void unlock() {
        CLHNode curNode = curCLHNode.get();
        curNode.lock = false;
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
        CLHLock clhLock = new CLHLock();
        new Thread(clhLock::m, "线程1号").start();
        new Thread(clhLock::m, "线程2号").start();
        new Thread(clhLock::m, "线程3号").start();
        new Thread(clhLock::m, "线程4号").start();
        new Thread(clhLock::m, "线程5号").start();
        new Thread(clhLock::m, "线程6号").start();
    }
}

```