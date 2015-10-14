exports.getUsers = function (req, res) {


  var users = [
    {
      firstName: 'fred',
      lastName: 'flintstone',
      email: 'fred@bedrock.com'
    },
    {
      firstName: 'wilma',
      lastName: 'flintstone',
      email: 'wilma@bedrock.com'
    },
    {
      firstName: 'barney',
      lastName: 'rubble',
      email: 'barney@shale.net'
    },
    {
      firstName: 'betty',
      lastName: 'rubble',
      email: 'betty@shale.net'
    },
    {
      firstName: 'pebbles',
      lastName: 'flintstone',
      email: 'pebbles@bedrock.com'
    },
    {
      firstName: 'bam bam',
      lastName: 'rubble',
      email: 'bambam@shale.net'
    },
    {
      firstName: 'ann',
      lastName: 'margrock',
      email: 'ann@margrock.ca'
    }
	];

  res.status(200).json(users);
};