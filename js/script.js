function toggleMeny() {

    document.querySelector('.navLinks').classlist.toggle('navActive')
    document.querySelector('.burger').classlist.toggle('toggle')

}

document.querySelector('.burger').addEventListener('click', toggleMeny)
