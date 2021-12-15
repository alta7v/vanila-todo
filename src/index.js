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

  // button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });
  div.appendChild(completeButton);

  // button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
