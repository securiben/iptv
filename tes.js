// leak.js

async function fetchData() {
    try {
        // Simulasi async task
        const result = await new Promise((resolve) => {
            setTimeout(() => resolve("Data async"), 125000);
        });

        console.log(result);
    } catch (error) {
        console.error("Error: wahhhhh", error.message);
    }
}

fetchData();

// satu dua tiga
error()'
