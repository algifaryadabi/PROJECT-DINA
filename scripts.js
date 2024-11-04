// Fungsi untuk memeriksa jawaban
const attempts = { answer1: 0, answer2: 0, answer3: 0 };
const correctAnswers = { answer1: 'sate madura', answer2: 'pak tisto', answer3: '8 januari' };

function checkAnswer(answerId, correctAnswer, questionNumber) {
    const userAnswer = document.getElementById(answerId).value.toLowerCase();
    const resultElement = document.getElementById("result" + questionNumber);

    if (userAnswer === correctAnswer) {
        resultElement.innerHTML = "✅ Jawaban Benar!";
        resultElement.style.color = "green";
        attempts[answerId] = 0; // Reset count if answered correctly
    } else {
        attempts[answerId]++;
        resultElement.innerHTML = "❌ Jawaban Salah. Coba lagi!";
        resultElement.style.color = "red";

        // Tampilkan jawaban yang benar setelah 3 kesalahan
        if (attempts[answerId] >= 3) {
            resultElement.innerHTML = `❌ Jawaban Salah. Jawaban yang benar adalah "${correctAnswer}".`;
            resultElement.style.color = "red";
            attempts[answerId] = 0; // Reset count after showing correct answer
        }
    }
}
