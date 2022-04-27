function Select({ accounts, setAccountId }) {
  /**
   * If the account changes, update
   * the accountId accordingly
   */
  const handleChange = ({ target }) => {
    setAccountId(target.value);
  };

  return (
    <select onChange={handleChange}>
      {!!accounts &&
        accounts.map((account) => (
          <option key={account.id} value={account.id}>
            {account.provider} - {account.label}
          </option>
        ))}
    </select>
  );
}

export default Select;
