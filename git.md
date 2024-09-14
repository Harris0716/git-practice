# 說明 blob, tree, commit, branch, head 分別是什麼
- blob
blob是Binary Large Object的縮寫，用來紀錄文件，每個文件都有sha-1值。<br>
blob存放在.git資料夾中的objects資料夾中。<br>
<code>git ls-tree HEAD</code> 可查看存放的文件的sha-1值及文件的名稱
<code>git cat-file -p <blob SHA-1></code> 可查看sha-1值的文件中的內容

- tree
tree用來紀錄資料夾，每個資料夾都有sha-1值。<br>
和blob一樣放在.git資料夾中的objects資料夾中。<br>
<code>git ls-tree HEAD</code> 亦可以看到資料夾的sha-1及資料夾名稱
<code>git cat-file -p <blob SHA-1></code> sha-1值如果是填資料夾的sha-1值，將會顯示資料夾中的文件及子資料夾
  
- commit
commit可用來紀錄每次的修改，每次提交會產生新的commit物件，此物件有以下訊息:
1. tree: 指向目前資料夾的tree物件
2. 前一次的commit物件(如果有)
3. commit message
4. author info
5. 提交時間
commit物件存在.git資料夾中的objects資料夾中，每個commit物件有sha-1值 <br>
可用 <code>git log</code> 來查看提交紀錄

- branch
如果要開發新的功能，可以建立新的branch，切到該branch後，commit的內容不會影響到其他branch <br>
<code> git branch branch_name </code> 可用來建立branch <br>
<code> git checkout branch_name </code> 可用來切換branch <br>

- head
head 是git 指向當前工作位置的指標，可用來決定commit時應更改哪個branch的內容<br>
<code>git log -1</code> 可用來查看當前的head指向的位置

# 紀錄在 git repo 操作過程中，.git 檔案夾裡的變化，看看你可以觀察到什麼
新增1個檔案時，並執行git add .，會更改.git/index檔案的內容， git commit -m "xxx"後，.git資料夾中的objects中，會產生兩個hash，一個用來紀錄blob，一個用來紀錄tree，head會指向新的commit



# commit message 應該怎麼寫比較好？應該有什麼 `style` 嗎？
commit message應該要簡潔，讓人一目了然，具體說明做了哪些更改


