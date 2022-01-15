In the `config.yml` file, the sessions are mapped to rooms with e.g. miro boards.
If you want to generate the html files for the sessions, please run:
`python board_switch -to session_1`
whereas `session_1` is the session name in the yml file.


Requirements: Mako templates


How to switch boards in a running environment with github pages:
* `python board_switch -to session_1`
* `git add html/*.html`
* `git push`

Attention: you have to be on the right branch for this!s