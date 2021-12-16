import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText);

  // li
  const li = document.createElement("li");

  // div
  const div = document.createElement("div");
  div.className = "list-row";
  li.appendChild(div);

  // div2
  const div2 = document.createElement("div");
  div2.className = "todo-status";
  div2.innerText = inputText;
  div.appendChild(div2);

  // complete button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // Text を 取得する
    const text = completeButton.parentNode.firstChild.innerText;

    // Element 作成
    const completeLi = document.createElement("li");
    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";
    completeLi.appendChild(completeDiv);
    const completeDiv2 = document.createElement("div");
    completeDiv2.className = "todo-status";
    completeDiv2.innerText = text;
    completeDiv.appendChild(completeDiv2);
    const completeRetButton = document.createElement("button");
    completeRetButton.innerText = "戻る";
    completeDiv.appendChild(completeRetButton);

    // 完了リストに追加する
    addFromCompleteList(completeLi);
    // ボタンの親 li タグを消す
    deleteFromIncompleteList(completeButton);
  });
  div.appendChild(completeButton);

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // ボタンの親 li タグを消す
    deleteFromIncompleteList(deleteButton);
  });
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

// 未完 リストから削除する
const deleteFromIncompleteList = (targetElement) => {
  const parrentdiv = targetElement.parentNode;
  const parrentli = parrentdiv.parentNode;
  document.getElementById("incomplete-list").removeChild(parrentli);
};

const addFromCompleteList = (targetElement) => {
  document.getElementById("complete-list").appendChild(targetElement);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
