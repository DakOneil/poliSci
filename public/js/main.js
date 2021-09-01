document.getElementById('button').addEventListener('click', showMeTheReps)



async function showMeTheReps() {
    try {
        const key = process.env.API_KEY
        const address = document.getElementById('address').value 
        const level = document.getElementById('levels').value 
        const role = document.getElementById('roles').value
        const url = await fetch(`https://www.googleapis.com/civicinfo/v2/representatives/?key=${key}`)
        console.log(url)
    }
    catch(err) {
        console.log(err)
    }
}