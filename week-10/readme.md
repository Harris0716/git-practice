# 20241114 W10 - 個人作業 7

## 1. 先在 Tokyo region 建立一個EC2 的 instance

## 2. 查看 CloudWatch > Metrics > All metrics

![image](https://hackmd.io/_uploads/SJEezLuHkg.png)
找到 **CPUUtilization**

## 3. 使用 SNS 收信
SNS (Simple Notification Service)
![image](https://hackmd.io/_uploads/HkBHXL_Ske.png)
![image](https://hackmd.io/_uploads/HkC_Q8dHJl.png)
![image](https://hackmd.io/_uploads/SkgqmIOBkg.png)
點 Create topic


![image](https://hackmd.io/_uploads/HkXd4UdHye.png)

點擊 Create subscription

![image](https://hackmd.io/_uploads/rkBhNLOrJl.png)
點擊 Create subscription

![image](https://hackmd.io/_uploads/BJAy8UdH1g.png)
可以收到信 (但可能在 Spam 中)
![image](https://hackmd.io/_uploads/B1F_LUOBJg.png)
![image](https://hackmd.io/_uploads/rk8tLUdS1x.png)

## 4. 設置 Alarm
Alarm > In Alarm
點 Create alarm 

Select metric > EC2 > Per-Instance
選 CPUUtilization

![image](https://hackmd.io/_uploads/SkJpvIdS1x.png)

![image](https://hackmd.io/_uploads/ryL-u8OrJg.png)

![image](https://hackmd.io/_uploads/Hk8gjLOBkl.png)

![image](https://hackmd.io/_uploads/rJ7UsU_r1e.png)
![image](https://hackmd.io/_uploads/ryjuiI_rJl.png)


## 5. 連線至EC2 instance

`ssh -i your-key.pem ec2-user@your-ec2-ip`

## 6. 測試 cpu alarm
```
sudo yum install stress-ng
stress-ng --cpu 1 --cpu-load 80 --timeout 10m
```

![image](https://hackmd.io/_uploads/r1y9MDuSke.png)
![image](https://hackmd.io/_uploads/S12qzPdrkx.png)
