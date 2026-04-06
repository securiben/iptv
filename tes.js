// leak.js

async function fetchData() {
    try {
        // Simulasi async task
        const result = await new Promise((resolve) => {
            setTimeout(() => resolve("Data"), 1000);
        });

        console.log(result);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchData();

// satu dua tiga
