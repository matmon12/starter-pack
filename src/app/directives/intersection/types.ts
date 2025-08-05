import type { Directive } from 'vue'

export interface IntersectionBinding {
  active: () => void
}

export type IntersectionDirective = Directive<HTMLElement, IntersectionBinding>
