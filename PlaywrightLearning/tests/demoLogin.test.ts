import { test, expect } from "@playwright/test";

test("TC_001 should login successfully", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await page.getByRole("textbox", { name: "Username" }).fill("student");
  await page.getByRole("textbox", { name: "Password" }).fill("Password123");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByRole("heading", { name: "Logged In Successfully" }),
  ).toBeVisible();
  const text = await page
    .getByText("Congratulations student. You successfully logged in!")
    .textContent();
  console.log(text);
  const homeLinkText = await page
    .getByRole("link", { name: "Home" })
    .textContent();
  console.log("homeLinkText: " + homeLinkText);
});


test("TC_002 Test All content", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const countryDropdown =  page.getByRole('combobox', { name: 'Country:' });
    await countryDropdown.selectOption('India');
    const selectedOption = await countryDropdown.inputValue();
    console.log("Selected option: " + selectedOption);
    const allOptions = await countryDropdown.locator('option').allTextContents();
    console.log("All options: " + allOptions);

});

test.only("TC_003 Test All content", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const enterName= page.getByRole('textbox', { name: 'Enter Name' });
    const enteredName=await enterName.fill('Shahnawaz Ahmad');
     console.log("Entered Name: " + await enterName.inputValue());

    const enterEmail=  page.getByRole('textbox', { name: 'Enter EMail' });
    const enteredEmail=await enterEmail.fill('shahnawazhkbk@gmail.com');
    console.log("Entered Email: " + await enterEmail.inputValue());


    const phoneNumber=page.getByRole('textbox', { name: 'Enter Phone' });
    await phoneNumber.fill('1234567890');
    console.log("Entered phone number is " + await phoneNumber.inputValue());

   

   const address=page.getByRole('textbox', { name: 'Address:' });
    await address.fill('123 Main St, Anytown, USA');
    console.log("Address: " + await address.inputValue());
    

   // Locate the radio buttons
  const maleOption = page.locator('#male');
  const femaleOption = page.locator('#female');


    //verify both are visible
    expect (await maleOption.isVisible()).toBeTruthy();
    expect (await femaleOption.isVisible()).toBeTruthy();

// Optionally, check labels
  const maleLabel = await page.locator('label[for="male"]').innerText();
  const femaleLabel = await page.locator('label[for="female"]').innerText();
   console.log("Available Gender Options: " + maleLabel + ", " + femaleLabel);


//Assert labels are correct
expect(maleLabel).toBe("Male");
expect(femaleLabel).toBe("Female");

const checked=  await maleOption.isChecked();
console.log("checking if it is checked or not: " + checked);

await maleOption.click();
const checked1=  await maleOption.isChecked();
console.log("checking if it is checked or not: " + checked1);

//Locate all checkboxes inside the 'Days' group
  const daysCheckboxes = page.locator('input.form-check-input');

  // Verify there are 7 checkboxes
  expect(await daysCheckboxes.count()).toBe(9);

  // Verify each day is available
  const expectedDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  for (const day of expectedDays) {
    const label = page.locator(`label[for="${day.toLowerCase()}"]`);
    expect(await label.isVisible()).toBeTruthy();
    expect(await label.innerText()).toBe(day);
    console.log("Available Day Option: " + day);
  }
  // click on sunday
 const day_sunday = await page.getByRole('checkbox', { name: 'Sunday' }).textContent();
console.log("The selected day is: " +day_sunday);

const sundayCheckbox = page.getByRole('checkbox', { name: 'Sunday' });
const isChecked = await sundayCheckbox.isChecked();
console.log("Is Sunday selected? " + isChecked);
await sundayCheckbox.click();
const assure_SundayClicked = await sundayCheckbox.isChecked();
console.log("Is Sunday selected? " + assure_SundayClicked);

const allColors=await page.locator("//select[@id='colors']").allInnerTexts();
console.log("All available colors are: " + allColors);
    
});