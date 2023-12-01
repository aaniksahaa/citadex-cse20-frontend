export async function getSheets() {
  try {

    const response = await fetch('/sheets.json');
    const data = await response.json();

    return data;

  } catch (error) {
    console.error('Error fetching or modifying data:', error);
  }
}