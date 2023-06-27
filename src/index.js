const init = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', function(event){
        event.preventDefault()
        const searchByIdInput = document.getElementById("searchByID")
        fetch(`http://localhost:3000/movies/${searchByIdInput.value}`)
        .then(resp => resp.json())
        .then(data => {
            const title = document.querySelector('#movieDetails h4')
            const summary = document.querySelector('#movieDetails p')
            title.textContent = data.title
            summary.textContent = data.summary
        })
    })
}
  
  document.addEventListener('DOMContentLoaded', init);