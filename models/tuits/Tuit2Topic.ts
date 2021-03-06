/**
 * @file Implements model to represent mapping between tuits and topics.
 */
import Topic from "./Topic";
import Tuit from "./Tuit";

export default class Tuit2Topic {
    private topic: Topic | null = null;
    private tuit: Tuit | null = null;
}