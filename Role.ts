interface Role {
  _id: string;
  type: string;
}

type RoleInput = Omit<Role, "_id">;
