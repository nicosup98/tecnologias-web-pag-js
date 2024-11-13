const $ = (selector) => document.querySelector(selector);
const $form = $("#form");
const $task = $("#task");
const $submit = $("#submit");
const $tasks = $("#tasks");

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const { value } = $task
    if (!value) return;
    console.log(value);
    $submit.setAttribute("disabled", "");
    $submit.setAttribute("aria-busy", "true");
    const $newTask = document.createElement("div")
    $newTask.innerText = value
    $tasks.appendChild($newTask)
    $task.value = ""

    $submit.removeAttribute("disabled");
    $submit.removeAttribute("aria-busy");

});
