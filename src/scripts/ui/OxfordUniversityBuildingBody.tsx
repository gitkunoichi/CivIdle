import { getTotalBuildingUpgrades } from "../logic/BuildingLogic";
import { L, t } from "../utilities/i18n";
import { BuildingColorComponent } from "./BuildingColorComponent";
import { BuildingDescriptionComponent } from "./BuildingDescriptionComponent";
import { IBuildingComponentProps } from "./BuildingPage";
import { BuildingWikipediaComponent } from "./BuildingWikipediaComponent";

export function OxfordUniversityBuildingBody({ gameState, xy }: IBuildingComponentProps): React.ReactNode {
   const building = gameState.tiles[xy].building;
   if (!building) {
      return null;
   }
   return (
      <div className="window-body">
         <BuildingDescriptionComponent gameState={gameState} xy={xy} />
         <fieldset>
            <div className="row">
               <div className="f1">{t(L.Science)}</div>
               <div className="text-strong">+{getTotalBuildingUpgrades(gameState)}</div>
            </div>
         </fieldset>
         <BuildingWikipediaComponent gameState={gameState} xy={xy} />
         <BuildingColorComponent gameState={gameState} xy={xy} />
      </div>
   );
}