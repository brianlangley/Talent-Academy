document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("signup-container");

  container.innerHTML = `
      <div class="grid md:grid-cols-2 gap-6 w-full p-4">
        <div class="md:col-span-2 text-center">
          <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Schrijf je in</h2>
          <p class="mt-2 text-lg text-gray-600">Vul je gegevens in en upload je CV</p>
        </div>
  
        <form id="signupForm" class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full" enctype="multipart/form-data">
          <div>
            <label for="first-name" class="block text-sm font-semibold text-gray-900">Voornaam</label>
            <input type="text" name="first-name" id="first-name" required autocomplete="given-name" class="mt-2.5 w-full rounded-md border border-gray-300 px-3.5 py-2 shadow-sm text-base text-gray-900 focus:ring-[#007BC1] focus:border-[#007BC1]" />
          </div>
          <div>
            <label for="last-name" class="block text-sm font-semibold text-gray-900">Achternaam</label>
            <input type="text" name="last-name" id="last-name" required autocomplete="family-name" class="mt-2.5 w-full rounded-md border border-gray-300 px-3.5 py-2 shadow-sm text-base text-gray-900 focus:ring-[#007BC1] focus:border-[#007BC1]" />
          </div>
          <div class="md:col-span-2">
            <label for="company" class="block text-sm font-semibold text-gray-900">School</label>
            <input type="text" name="school" id="school" autocomplete="school" class="mt-2.5 w-full rounded-md border border-gray-300 px-3.5 py-2 shadow-sm text-base text-gray-900 focus:ring-[#007BC1] focus:border-[#007BC1]" />
          </div>
          <div class="md:col-span-2">
            <label for="email" class="block text-sm font-semibold text-gray-900">E-mailadres</label>
            <input type="email" name="email" id="email" required autocomplete="email" class="mt-2.5 w-full rounded-md border border-gray-300 px-3.5 py-2 shadow-sm text-base text-gray-900 focus:ring-[#007BC1] focus:border-[#007BC1]" />
          </div>
          <div class="md:col-span-2">
            <label for="password" class="block text-sm font-semibold text-gray-900">Wachtwoord</label>
            <input type="password" name="password" id="password" required minlength="6" class="mt-2.5 w-full rounded-md border border-gray-300 px-3.5 py-2 shadow-sm text-base text-gray-900 focus:ring-[#007BC1] focus:border-[#007BC1]" />
          </div>
          <div class="md:col-span-2">
            <label for="cv" class="block text-sm font-semibold text-gray-900">Upload je CV</label>
            <input type="file" name="cv" id="cv" accept="application/pdf,.doc,.docx"
              class="mt-2.5 block w-full text-sm text-gray-900
                file:mr-4
                file:rounded-md
                file:border-0
                file:bg-[#007BC1]
                file:px-4 file:py-2
                file:text-sm file:font-semibold file:text-white" />
          </div>
          <div class="md:col-span-2 mt-6">
            <button type="submit" class="w-full rounded-md bg-gradient-to-r from-[#007BC1] to-[#7AC943] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-[#006aa6] hover:to-[#65b62f]">Verstuur</button>
          </div>
          <p id="successMessage" class="md:col-span-2 text-center text-green-600 hidden mt-4">Account succesvol opgeslagen!</p>
        </form>
      </div>
    `;

  const form = document.getElementById("signupForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const school = document.getElementById("school").value.trim();
    // CV file handling (for now, just store the file name)
    const cvInput = document.getElementById("cv");
    const cvFile = cvInput.files[0] ? cvInput.files[0].name : null;

    if (!firstName || !lastName || !email || !password) {
      alert("Vul alle verplichte velden in.");
      return;
    }

    const userData = {
      name: `${firstName} ${lastName}`,
      email,
      password,
      school,
      cv: cvFile, // Placeholder for CV, can be updated later
      questionnaire: null, // Placeholder for questionnaire details
    };

    localStorage.setItem("talentUser", JSON.stringify(userData));
    document.getElementById("successMessage").classList.remove("hidden");
    form.reset();
  });
});
