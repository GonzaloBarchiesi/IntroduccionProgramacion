document.querySelector('form')
$form.addEventListener('submit', handleSubmit)

.addEventListener('submit', e =>    {
e.preventDefault()
const data = Object.fromEntries(
new FormData(e.target)

)
 alert(JSON.stringify(data))   
})