/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Sync Spray.
 *
 * The Initial Developer of the Original Code is gps@mozilla.com
 *
 * Portions created by the Initial Developer are Copyright (C) 2011
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

// This script is executed whenever a new table is loaded and ready for
// execution.

let anchors = document.getElementsByTagName("a");
let filtered = [];

for (let i = 0; i < anchors.length; i++) {
  let anchor = anchors[i];
  let href = anchor.getAttribute("href");

  if (href) filtered.push(anchor);
}

// select a random link
let i = Math.floor(Math.random() * (filtered.length));
if (i == filtered.length) i = 0;

let anchor = filtered[i];

console.log("Anchor: " + anchor);

// TODO this seems to open in a new tab, not in current window
let ev = anchor.ownerDocument.createEvent("MouseEvents");
ev.initMouseEvent("click",true,false,anchor.ownerDocument.defaultView,null,0,0,0,0,false,false,false,false,1,null);
anchor.dispatchEvent(ev);

