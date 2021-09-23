/*
# Copyright (C) 2021 rizad.
#
# Toxic bot is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# Toxic bot is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#
*/

function successfullMessage(msg) {
    return "✅ *LILLY [Dev: rizad]*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *LILLY [Dev: rizad]*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *LILLY [Dev: rizad]*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
