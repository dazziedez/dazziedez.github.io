<br><br>

<h2 align=center>A discord.py bot that logs avatar changes.</h2>
<h4 align=center>Features a web ui to view avatar history, and other stuffs you can see below!</h4>
<hr>

A Flask-based web application designed for managing and displaying user avatars, alongside a Discord bot responsible for logging the avatars themselves. The system allows for the fetching and displaying of user avatars and information through a web interface, as well as updating and storing this information efficiently.

## Features

- **Avatar Management**: Users can view a history of their avatars stored in a dedicated directory, accessible through a web interface.
- **User Information Fetching**: The system fetches and displays user information, including the latest avatar, using Discord's API.
### Screenshots
|Main (WIP)|User view|
|---------|----------|
| <img src="img/showcase/9Aat9Cj.png" alt="Main" width="450" style="border-radius: 15px"> | <img src="img/showcase/MTBvCnp.png" alt="User" width="450" style="border-radius: 15px"> |

## Installation

To set up the Avatar Logger and Management System, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/dazziedez/discordpy-avatar-logger.git
   cd discordpy-avatar-logger
   ```

2. **Install Dependencies**
   Ensure you have Python 3.6+ installed, then run:
   ```bash
   pip install -r requirements.txt
   ```

3. **Configuration**
   - Create a `config.json` file in the root directory with the following structure:
     ```json
     {
       "bot_token": "YOUR_DISCORD_BOT_TOKEN"
     }
     ```
   - Adjust the Flask and bot settings as necessary in their respective files.

> Please refer to [this article](flask.palletsprojects.com/en/2.3.x/deploying/proxy_fix/) when using a reverse proxy.<br>
> I'd recommend you generally refer to [this article](https://flask.palletsprojects.com/en/2.3.x/deploying/) as well!

4. **Run the application**
   This will run the bot AND the flask app, simultaneously
   ```bash
   python start.py
   ```

## Usage
> You may need to tell Flask that you're using a proxy.

- Navigate to `http://your.domain/<user_id>` to view the avatars and information for a specific user.
- The Discord bot will automatically log avatar changes when configured and running.

<hr>

<span class="graahh"><i class="fa-solid fa-arrow-down" style="color: #ffffff;"></i> <a href="https://github.com/dazziedez/discordpy-avatar-logger/releases/latest" target="_blank"> Download</a></span> <span class="graahh"><i class="fab fa-github fa-sm"></i> <a href="https://github.com/dazziedez/discordpy-avatar-logger" target="_blank"> Source code</a></span>

<br>
