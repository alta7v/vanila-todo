import "./styles.css";

const addTodo = (text) => {
  // li
  const li = document.createElement("li");

  // div
  const div = document.createElement("div");
  div.className = "list-row";
  li.appendChild(div);

  // div2
  const div2 = document.createElement("div");
  div2.className = "todo-status";
  div2.innerText = text;
  div.appendChild(div2);

  // complete button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // Text を 取得する
    const completeText = completeButton.parentNode.firstElementChild.innerText;

    // Element 作成
    const completeLi = document.createElement("li");
    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";
    completeLi.appendChild(completeDiv);
    const completeDiv2 = document.createElement("div");
    completeDiv2.className = "todo-status";
    completeDiv2.innerText = completeText;
    completeDiv.appendChild(completeDiv2);
    const completeRetButton = document.createElement("button"); // 戻るbutton
    completeRetButton.innerText = "戻る";
    completeDiv.appendChild(completeRetButton);
    completeRetButton.addEventListener("click", () => {
      const text = completeButton.parentNode.firstElementChild.innerText;

      addTodo(text);
      deleteCompleteList(completeRetButton);
    });

    // 完了リストに追加する
    addFromCompleteList(completeLi);
    // ボタンの親 li タグを消す
    deleteIncompleteList(completeButton);
  });
  div.appendChild(completeButton);

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // ボタンの親 li タグを消す
    deleteIncompleteList(deleteButton);
  });
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

// 未完 リストから削除する
const deleteIncompleteList = (targetElement) => {
  const parrentdiv = targetElement.parentNode;
  const parrentli = parrentdiv.parentNode;
  document.getElementById("incomplete-list").removeChild(parrentli);
};

// 未完 リストから削除する
const deleteCompleteList = (targetElement) => {
  const parrentdiv = targetElement.parentNode;
  const parrentli = parrentdiv.parentNode;
  document.getElementById("complete-list").removeChild(parrentli);
};

const addFromCompleteList = (targetElement) => {
  document.getElementById("complete-list").appendChild(targetElement);
};

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText);
  addTodo(inputText);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
