// Function to detect MetaMask and request account
async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const [account] = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log(`Connected account: ${account}`);
            return account;
        } catch (error) {
            console.error("User denied wallet connection");
            return null;
        }
    } else {
        alert("MetaMask not detected! Please install MetaMask to proceed.");
    }
}

// Payment function using ethers.js
async function payWithEthereum(appointmentFee) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    
    const tx = {
        to: '0xYourEthereumAddressHere', // Replace with your Ethereum address
        value: ethers.utils.parseEther(appointmentFee.toString()) // Fee in Ether
    };

    try {
        const transaction = await signer.sendTransaction(tx);
        console.log(`Transaction sent: ${transaction.hash}`);
        alert(`Payment successful! Transaction Hash: ${transaction.hash}`);
    } catch (error) {
        console.error(error);
        alert("Payment failed. Please try again.");
    }
}

// Handle form submission
document.getElementById('appointment-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;

    // Simple form validation
    if (!name || !email || !phone || !message) {
        alert("Please fill in all required fields.");
        return;
    }

    // Check if it's an appointment request or just a contact
    if (appointmentDate && appointmentTime) {
        // If appointment, show payment section
        document.getElementById('payment-section').style.display = 'block';

        // Payment with Ethereum
        const appointmentFee = 0.05; // Example fee in Ether
        await connectWallet(); // Connect to MetaMask
        await payWithEthereum(appointmentFee); // Process Ethereum payment

    } else {
        // Just a contact message, no payment required
        alert("Message sent! We'll get back to you soon.");
    }

    // Reset form
    document.getElementById('appointment-form').reset();
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.querySelector('.faq-answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
