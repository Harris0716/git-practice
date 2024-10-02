# 什麼是 AWS Region, AZ (availability zones)
- AWS Region 是 AWS 擺放伺服器的地區
- 可用性區域 (Availability Zones, AZ) 是 AWS Region 較小的單位，每個 AZ 彼此獨立
用來提高系統的可靠性 (Reliability)，避免單點故障，每個 AWS Region 至少有兩個 AZ。


# 如果你要使用 AWS 服務，你會怎麼選擇用哪個 Region，考慮的因素有哪些？
以下是常見的考量因素
1. 距離  
選擇靠近使用者的region，比較能避免網路延遲。

3. 定價  
不同地區的 EC2 instance, S3 雲端儲存 的租借價格不同 

4. 法律規範  
應符合該國家的法律規範

