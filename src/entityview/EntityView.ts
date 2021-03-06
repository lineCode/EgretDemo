// 实体基类，包括npc、玩家、怪物、传送阵等需要显示的实体
class EntityView extends egret3d.Object3D {
    private entityId: number; // 唯一实体id

    constructor(entityId: number) {
        super();
        this.entityId = entityId;
    }
}