import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import MessageForm from "./MessageForm";

const MessageCanvas = ({ icon }: { icon?: boolean }) => {
  return (
    <AlertDialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <AlertDialogTrigger asChild>
              {icon ? (
                <Button className="rounded-full " variant="outline" size="icon">
                  <Send className="h-[1.2rem] w-[1.2rem] text-primary" />
                </Button>
              ) : (
                <Button className="rounded-full " variant="outline" size="sm">
                  Contact
                </Button>
              )}
            </AlertDialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Send a new message</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>New message</AlertDialogTitle>
          <AlertDialogDescription className="py-1">
            This message will be received to Web Solution company.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <MessageForm modal />
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MessageCanvas;
