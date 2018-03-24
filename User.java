package blockhacks;

import java.util.ArrayList;

public class User {
	private String username;
	private String password;
	private ArrayList<Account> accounts;
	private ArrayList<Subscription> subscriptions;

	public User(String username, String password) {
		
	}
	
	public void addAccount(Account newAccount) {
		this.accounts.add(newAccount);
	}
	
	private void addSubscription(Subscription newSubscription) {
		this.subscriptions.add(newSubscription);
	}
	
	public void requestSubscription(Subscription newSubscription) {
		
		
		
	}
}
