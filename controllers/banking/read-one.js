const faker = require('faker');
const { error } = require('../../functions');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { secret } = req.user;
  if (!id || !secret) {
    throw error(404, 'Missing required params');
  }

  const bank = {
    name: faker.company.companyName(),
    iban: faker.finance.iban(),
    accountName: faker.finance.accountName(),
    account: faker.finance.account(),
    country: faker.address.country(),
    city: faker.address.city(),
    address: faker.address.streetAddress(),
    zipcode: faker.address.zipCode(),
    email: faker.internet.exampleEmail(),
    phone: faker.phone.phoneNumber(),
  };

  return res.status(200).json({
    success: true,
    data: JSON.stringify(bank),
  });
};
