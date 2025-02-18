import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

interface TempUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TempAddress;
  phone: string;
  website: string;
  company: TempCompany;
}
interface TempAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TempGeo;
}
interface TempGeo {
  lat: string;
  lng: string;
}
interface TempCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

const Page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: TempUser[] = await response.json();
  return (
    <Table className="container mx-auto">
      <TableCaption>A list of users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Username</TableHead>
          <TableHead className="text-right">Phone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell className="text-right">{user.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Page;
