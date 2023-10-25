var addToDoButton = document.getElementById('addToDo');
var toDocontainer = document.getElementById('toDocontainer');
var input = document.getElementById('inputField');

addToDoButton.onclick = function(){
    // Vérifier si l'input n'est pas vide
    if (inputField.value != ""){
        //si l'input n'est pas vide, créer un paragraphe
        var paragraph = document.createElement('p')
    }
    //valoriser  ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputField.value ;

    //Styliser le paragraphe
    paragraph.classList.add('paragraphe_style')
    
    //Insérer le paragraphe dans l'élément toDocontainer
    toDocontainer.appendChild(paragraph)
    
    //vider l'input quand le paragraphe est ajouté
    inputField.value = ""

    //Barrer le paragraphe quand on clique dessus
    paragraph.addEventListener('clik',function(){
        paragraph.classList.add('paragraph_click');
    })

    //Supprimer la tâche quand on double click sur la tâche

    paragraph.addEventListener('dblclick', function(){
        toDocontainer.removeChild(paragraph)
    })
}