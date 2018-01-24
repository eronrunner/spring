package simple;

public class Account {
	private String userName;
	private String password;
	private String registeredEmail;
	
	public Account() {
		super();
	}

	public Account(String userName, String password, String registeredEmail) {
		super();
		this.userName = userName;
		this.password = password;
		this.registeredEmail = registeredEmail;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRegisteredEmail() {
		return registeredEmail;
	}

	public void setRegisteredEmail(String registeredEmail) {
		this.registeredEmail = registeredEmail;
	}
	
}
