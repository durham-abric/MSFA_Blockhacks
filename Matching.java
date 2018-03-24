package blockhacks;
import java.util.LinkedList;
import java.util.Queue;
import blockhacks.Subscription.Type;
	

public class Matching {
	
	    Queue<Subscription> NetFlixAvailable;
	    Queue<Subscription> SpotifyAvailable;
	    
	    Queue<Subscription> NetFlixRequest;
	    Queue<Subscription> SpotifyRequest;
	    
	    private static Matching instance;
	    //adding boolean is false, requesting boolean is true
	    private Matching() {  	}
	    
	    //static block initialization for exception handling
	    static{
	        try{
	            instance = new Matching();
	        }catch(Exception e){
	            throw new RuntimeException("Exception occured in creating singleton instance");
	        }
	    }
	    
	    public static Matching getInstance(){
	        return instance;
	    }
	    
	    public void addSubscription(Subscription subscription, boolean addRequest) {
	    	if(subscription.getType()==Type.Netflix && addRequest==false) {
	    		NetFlixAvailable.add(subscription);
	    	}	else if(subscription.getType()==Type.Netflix && addRequest==true) {
	    		NetFlixRequest.add(subscription);
	    	}	else if(subscription.getType()==Type.Spotify && addRequest==false) {
	    		SpotifyAvailable.add(subscription);
	    	}	else if(subscription.getType()==Type.Spotify && addRequest==true) {
	    		SpotifyRequest.add(subscription);
	    	}
	    }
	    
	   private void findMatchNetFlix() {
	    	for(Subscription wanted: NetFlixRequest) {
	    		if(NetFlixAvailable.size()!=0) {
	  
	    			NetFlixRequest.remove();
	    			NetFlixAvailable.remove();
	    		}
	    	}
	    }
	   
	   private void findMatchSpotify() {
	    	for(Subscription wanted: SpotifyRequest) {
	    		if(SpotifyAvailable.size()!=0) {
	  
	    			SpotifyRequest.remove();
	    			SpotifyAvailable.remove();
	    		}
	    	}
	    }


}
