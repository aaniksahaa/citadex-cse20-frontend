export async function getSheets() {
  try {

    // const response = await fetch('/sheets.json');
    // const data = await response.json();

    // for now, just statically serving

    // if needed change here

    const j = {
        "Class Links" : 
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSDW0d4FJFjcxjmmwmoNyfLFk24TtKNVXfec28zjGcWgp9lg-tVbpgk_XxfveUNCbfHNBcLhWlKwSan/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false",
        "Today's Classes":
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vS0bMphntdHbeqtb-tT4x1owwOkqiEkyDxdbz6PVebqus6fB_jUMOj6Bsqj_BJJfKGjlWMno88PDmg1/pubhtml?widget=true&amp;headers=false",
        "Materials and Resources":
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRW0jvPXY4O4Jf_0k0ei6AR7IHo-XB0FqQmtOU2Y8xKU83n1Wtq9w1Z_LVZvo2eEMGFcT-HfQgwSK6v/pubhtml?gid=1171717747&amp;single=true&amp;widget=true&amp;headers=false",
        "Drive Links": 
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSeeThZv-4rO_7OfS26oheK81Rxk0piAPyczdSBe_K8IW9SzsS28qXmpAxP0eO9iGX8uc_GZF28EAeN/pubhtml?widget=true&amp;headers=false"
    }

    console.log(j)

    return j;

  } catch (error) {
    console.error('Error fetching or modifying data:', error);
  }
}