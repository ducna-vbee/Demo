interface User
{
	id: number;
	name: string;
	role: string;
}

interface Administrator extends User
{
	role: 'admin';
}

function isAdmin(person: any) : person is Administrator
{
	return (person !== null) && (typeof person === 'object') && ('role' in person) && (person.role === 'admin');
}

function check(data : User) : void
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