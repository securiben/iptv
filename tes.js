// leak.js

async function fetchData() {
    try {
        // Simulasi async task
        const result = await new Promise((resolve) => {
            setTimeout(() => resolve("Data monitor"), 5000);
        });

        console.log(result);
    } catch (error) {
        console.error("Error: last changes", error.message);
    }
}

fetchData();

// satu dua tiga last
error()'
