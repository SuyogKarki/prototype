import './Users.scss';

const Users = ({ users }) => {
  return (
    <div className='app__users'>
      <div className='app__users-container'>
        <div className='users__title'>
          <h1>Active bidders</h1>
        </div>

        <ul className='users__list'>
          {users.map((user, index) => (
            <li key={index}> {user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Users;
