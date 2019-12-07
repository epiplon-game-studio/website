const dialogs = document.getElementsByClassName("overlay-dialog");

function toggleDialog(project) {
    for (let index = 0; index < dialogs.length; index++) {
        let dialog = dialogs[index]
        if (dialog.getAttribute('project') === project) {
            dialog.classList.toggle('show')
            if (dialog.classList.contains('show'))
                dialog.classList.remove('hide')
            else
                dialog.classList.add('hide')
        }
    }
}