"""Forms for playlist app."""

from wtforms import SelectField
from flask_wtf import FlaskForm


class PlaylistForm(FlaskForm):
    """Form for adding playlists."""
    # Add the necessary code to use this form
    name = StringField()
    description = StringField()


class SongForm(FlaskForm):
    """Form for adding songs."""
    # Add the necessary code to use this form
    title = StringField()
    artist = StringField()



# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
