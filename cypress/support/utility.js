import { faker } from '@faker-js/faker';

function generatePersoonlijkeGegevensData() {

  const isFemale = faker.datatype.boolean();
  const gender = isFemale ? 'female' : 'male';
  const aanhef = isFemale ? 'Mevr.' : 'Dhr.';
  const voornaam = faker.person.firstName(gender);
  const achternaam = faker.person.lastName();
  const geboortedatum = faker.date.birthdate({ min: 18, max: 85, mode: 'age' });
  const formatter = new Intl.DateTimeFormat('nl-NL', {day: '2-digit',month: '2-digit',year: 'numeric'});
  const geboortedatumFormatted = formatter.format(geboortedatum);
  const postcode = `${faker.number.int({ min: 1000, max: 9999 })}${faker.string.alpha({ length: 2, casing: 'upper' })}`;
  const huisnummer = faker.number.int({ min: 1, max: 200 }).toString();
  const stad = faker.location.city();
  const straat = faker.location.street();


  const email = faker.internet.email({
    firstName: voornaam,
    lastName: achternaam,
    provider: 'kpn.com',
  }).toLowerCase();

  return {
    aanhef,
    voornaam,
    achternaam,
    geboortedatumFormatted,
    postcode,
    huisnummer,
    stad,
    straat,
    email,
    gender,
  };
}

function parsePersoonlijkeGegevens(rawHtml) {
  const data = rawHtml.split('<br>').map(t => t.trim());

  const [aanhef, voornaam, ...achternaamParts] = data[0].split(' ');
  const achternaam = achternaamParts.join(' ');
  const email = data[1];

  const addressParts = data[2].match(/(.+)\s(\d+)$/);
  const straat = addressParts[1];
  const huisnummer = addressParts[2];

  const postcodeCityParts = data[3].match(/^(\d{4}[A-Z]{2})\s(.+)$/);
  const postcode = postcodeCityParts[1];
  const stad = postcodeCityParts[2];

  return {
    aanhef,
    voornaam,
    achternaam,
    email,
    straat,
    huisnummer,
    postcode,
    stad
  };
}


module.exports = { generatePersoonlijkeGegevensData, parsePersoonlijkeGegevens};
