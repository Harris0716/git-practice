# HW6
**(最後有寫進階題~)** 
  
## `curl localhost`
![image](https://hackmd.io/_uploads/SJBc_WiWkx.png)

## `sudo nginx -t`
![image](https://hackmd.io/_uploads/SyumFJcWyx.png)

## `sudo vim /etc/nginx/nginx.conf`
刪除多餘的 ;  
![image](https://hackmd.io/_uploads/H1-Kc4ob1l.png)

## `sudo nginx -t`
![image](https://hackmd.io/_uploads/BJub9Libyl.png)
此時語法問題已被排除  

---

## `sudo systemctl restart nginx`
![image](https://hackmd.io/_uploads/SyygoUiZ1x.png)

依照錯誤訊息的指示，輸入   
## `sudo systemctl status nginx.service`

![image](https://hackmd.io/_uploads/rJAKoLjWkx.png)


我參考了Copilot提供的解法  
![image](https://hackmd.io/_uploads/S1bSusoW1e.png)

80 port 已經被其他服務佔用  

## `sudo lsof -i :80`
![image](https://hackmd.io/_uploads/ByjlT8ob1l.png)


我嘗試把 srv 刪除  
## `sudo kill <PID>`

此時輸入 `sudo systemctl restart nginx` 不會出現問題   

輸入`sudo lsof -i :80` 會出現以下process  
![image](https://hackmd.io/_uploads/rk2K16ib1x.png)  

問題還沒有解決！  
![image](https://hackmd.io/_uploads/Hy3Ue6jZ1x.png)

--- 
## `sudo systemctl status nginx.service`
Nginx 正常運行了  
![image](https://hackmd.io/_uploads/SyW7GTjb1e.png)

但log中還是有錯誤  
## `cat /var/log/myweb/error.log`
![image](https://hackmd.io/_uploads/Hkzmmai-1x.png)

## sudo tail -f /var/log/nginx/error.log
![image](https://hackmd.io/_uploads/SyLdXpjW1e.png)


我把`/var/log/myweb/error.log`的訊息貼給Copilot得到以下回覆  
但我更改權限後，問題還是沒解決  
![image](https://hackmd.io/_uploads/rk5pmaoWyg.png)

--- 

## `sudo iptables -L`
檢查防火牆設置  
![image](https://hackmd.io/_uploads/BkJU06oZJe.png)
![image](https://hackmd.io/_uploads/BkaVCai-ye.png)

## `sudo iptables -D INPUT -p tcp --dport 80 -j REJECT --reject-with icmp-port-unreachable`

![image](https://hackmd.io/_uploads/BynG1AsZJx.png)

成功！



---
# 補充 (進階題): 
在修改檔案時，  
有可能會遇到以下問題:  
![image](https://hackmd.io/_uploads/r1yzKLoW1e.png)
記憶體已滿，無法修改  

## `df -h`
![image](https://hackmd.io/_uploads/ryEQaEsWJg.png)
這個指令可以列出記憶體的分配情形  

可以先從tmp檔，log檔，cache檔開始清理  
但刪完後，/dev/root 也只會變99%  

---

![image](https://hackmd.io/_uploads/r1i0WRsbyg.png)
透過 sudo find / -type f -size +100M  
找出容量大於 100M 的檔案  

`sudo rm -f /var/log/system/largefile1 /var/log/system/largefile2 /var/log/system/largefile3 /var/log/system/largefile4`

![image](https://hackmd.io/_uploads/rynUMAsZ1e.png)
/dev/root 的 use 成功減到 40%  
















