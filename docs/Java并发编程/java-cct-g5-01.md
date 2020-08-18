---
autoGroup-5: 其他线程方法
title: join
---

### join
``` java
/**
 * join基本使用（一）
 * <p>
 * 1. 和sleep功能相似，都是暂停当前线程
 * 2. 和sleep不同的是，sleep是native方法，而join是调用wait方法+线程alive判断
 * 3. 所以sleep是不会释放锁的，而join会释放锁
 *
 * @author 91MrZhang on 2020/8/1
 */
public class JoinDemo01 {

    public void m() {
        String threadName = Thread.currentThread().getName();
        System.out.println(threadName + "---->开始工作");
        try {
            TimeUnit.SECONDS.sleep(5);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(threadName + "---->结束工作");
    }

    public static void main(String[] args) {
        JoinDemo01 jd01 = new JoinDemo01();
        Thread t1 = new Thread(jd01::m, "线程1号");
        Thread t2 = new Thread(jd01::m, "线程2号");

        t1.start();
        t2.start();

        try {
            // 源码中解释：Waits at most {@code millis} milliseconds for this thread to die. A timeout of {@code 0} means to wait forever.
            // 等待“这个线程”死亡，“这个线程”，就是t2了，main线程去等它*/
            // 至于是如何阻塞主线程，可以参考这篇文章：https://blog.csdn.net/qq_20919883/article/details/100695018
            t2.join(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // 如果不join，则主线程一直向下执行
        System.out.println("主线程结束");

    }
}
```


