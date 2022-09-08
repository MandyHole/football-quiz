# Football Quiz

This is a quiz to test football fans' general knowledge of the sport; quiz players have a goal to earn their spot in the Champions League by getting all ten question attempts correct (i.e., scoring 10 out of 10). As 'football' could refer to two different sports, depending on geograpical location, I included two footballs (as opposed to American footballs) in the main header to make it clear. Players are encouraged to play again to either improve or maintain their title.

<img src="assets/images/football-quiz-collage.jpg" alt="screenshots of mobile and desktop views of the football quiz at various points" width=50%>

### Existing Features

### Header
The header makes it clear what the website is. It is 80% width to line up with the content and be responsive across devices

<img src="assets/images/football-logo-sized.png" alt="Words 'Football quiz' with footballs (i.e, soccer balls) as the 'o's in the word 'Football'">

### Score tally
A band across the top of the website shows the player how many answers they have had correct, how many attempts they've had (i.e., how many questions they have answered) and what their current league status is. This is optimised for mobile with the league dropping to the next line.

### Rules
The rules section at the top spells out clearly what the game's goal is. It disappears once the first answer is submitted to keep the page cleaner, but there is a button at the bottom of the page to make it reappear if a user wishes. It will subsequently disappear again once the user goes onto submit another answer or views the next question.

### Questions
A user gets randomly asked 10 questions generated from a dictionary of 50 possibilities. 

### Question Feedback
Once a user submits their response to the question, they get immediate feedback saying whether their answer was correct or incorrect whilst also providing the question and the correct answer for clarity to promote the likelihood that they will retain this information in future attempts. They also see a video of a professional footballer either scoring a great goal (if the answer is correct)...or a video of a professional missing an open goal (if the answer is incorrect). They are then prompted to go to the next question.

### End of Game Feedback
Once the player has responded to two ten questions, they are taken to a screen with an analysis of their performance and encouragement to play again. A 'play again' button resets the game so players can easily start again without refreshing the page.

## Future Features to Implement
Update questions/answers and add more to keep the content current and interesting.

Create a login where users can see their previous results

## Testing

### Validator Testing


<ul><li><strong>HTML:</strong> No errors were returned when passing through the official <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html" aria-label="W3C validator website - opens in new window" target="new">W3C validator</a></li>
<li><strong>CSS: </strong> No errors were found when passing through the official (Jigsaw) validator</li>
Javascript
No errors were found passing through the jshint validator.


![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome MandyHole,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **September 1, 2021**

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
