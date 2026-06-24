<!DOCTYPE html>
<html>
<head>
    <title>Registered Users</title>
</head>
<body>
    <h1>Registered Members</h1>

    <table border="1">
        <tr>
            <th>Full Name</th>
            <th>Country</th>
            <th>Email</th>
            <th>PhoneNo</th>
        </tr>

        @foreach($users as $user)
        <tr>
            <td>{{ $user->fullname }}</td>
            <td>{{ $user->country }}</td>
            <td>{{ $user->email }}</td>
            <td>{{ $user->phoneno }}</td>
        </tr>
        @endforeach
    </table>
</body>
</html>