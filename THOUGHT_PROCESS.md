# Project Goals
* The end-user should be able to create fake text messages with the following info:
    * contact name of receiver
    * pfp of receiver (should be able to take images)
    * messages with bubble speeches (blue -> sender, grey -> receiver)
    * messages can also be images, voice recording, or videos
* The end-user should be able to add date dividers 
* The end-user should be able to delete messages
* The end-user should be able to view all messages they have created
* The end-user should be able to download their image

## Extra
* The end-user should be able to rearrange messages they have sent
* The application should give a warning if their messages are too long OR just take a picture of what gets displayed on the phone
* The end-user should be able to modify their phone settings (default will be WiFI but we can also do 4G and 5G)
* The end-user should be able to change the battery percentage 
    * todo: figure out why it's a scroll vs an input field (?)
* Toggle if location is on
* The end-user can create a group chat by having multiple contacts
* The application will locally cache your work in case of internet failure

# Thought Process
* A user can fill out info they want (contact name and the messages) through an input field
* When they click on the icon, it will prompt them to upload an image
    * I would need a pencil icon to upload the icon (or a button of some sort)
* When they create a message, there can be two buttons (the message will either be from the sender or the receiver)
* There will be a date picker and an `Add` button to create "date" dividers
    * the user can also "reset" the date and time (having a blank date will default the message as today)
* I will either build an API to upload images or use a third-party library 
* I will try to get icons from somewhere (will need `camera`, `microphone`, `video recorder`)
    * clicking on the `camera` button prompt user to upload image. note that they cannot add message attached to it (must be created seperated)
    * clicking on the `microphone` button will create the following text `[AUDIO|XX:XX]` where XX is the length of the recording in minutes and seconds
        * for this, we would need a play button and maybe a second image (not sure what to call this)
    * clicking on the `video recorder` option will prompt the user to upload an image but when it gets displayed, there will be a button on top of it
* Ideally, the input fields can take
    * I will also try to cleanse there from code if not done (but should not be an issue since the application will likely be frontend heavy)
* A button to download the result
    * I will either build an API to convert something it to a PDF or use a third-party library 
* I'm not sure if I will just build it using `divs` or the HTML canva object depending on the third party for the library to download the image

## Allowing the End-User to Upload an Image
* We should be able to code the functionality to upload the file 
* We'll need functionality to crop an image
    * This tutorial (https://levelup.gitconnected.com/upload-and-crop-your-images-in-react-81ba3bf66523) might be helpful

## Downloading a Specific Section as an Image
* Use a third-party (ex/ `html2canvas`) to help with functionalities to create image
* For the section to download, let's create an element with a specific 

# Other

# To-do
[ ] Create workflows