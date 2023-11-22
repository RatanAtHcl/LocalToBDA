;
; AutoIt Version: 3.0
; Language:       English
; Platform:       Win9x/NT
; Author:         mmudaliar
;
; Script Function:
;   Hits the save button on the chrome browser. The chromes settings must be changed for this to work
;



; Wait for the save as become active 

WinWaitActive("Save As","","10")
$filename = ControlGetText("Save As", "", "Edit1")
$fullpath = "test" 
ControlSetText("Save As", "", "Edit1", $fullpath)
ControlClick("Save As","","Button1") 
;pSend("{ENTER}")

; Now wait for folder to close before continuing
;WinWaitClose("Save As")

; Finished!
 
