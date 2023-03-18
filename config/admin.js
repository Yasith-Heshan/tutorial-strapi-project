module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '74032e2753907eeb91b679abeb822a69'),
  },
});
