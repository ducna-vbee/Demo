interface User
{
	id: number;
	name: string;
	role: string;
}

interface Administrator extends User
{
	role: 'administrator';
}

function isAdmin(person: any) : person is Administrator
{
	return (person !== null) && (typeof person === 'object') && ('role' in person) && (person.role === 'admin');
}

function check(data : User)
{
	if (isAdmin(data) === true)
	{
		console.log(`Administrator Role: ${data.role}`);
	}
	else
	{
		console.log("Not an administrator role!");
	}
}