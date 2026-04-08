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

const data: any = { id: 1, name: 'Alice', role: 'administrator' };

function check(data : User)
{
	if (isAdmin(data) === true)
	{
		console.log(`Administrator Role: ${data.role}`);
	}
	else
	{
		console.log("Not an administrator...........");
	}
}

check(data);