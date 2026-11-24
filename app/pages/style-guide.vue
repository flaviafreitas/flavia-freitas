<script lang="ts">
	import StyleGuidePage from '~/scripts/style-guide'

	definePageMeta({ layout: false })

	export default StyleGuidePage
</script>

<template>
	<div class="style-guide">
		<a
			href="#conteudo"
			class="style-guide-skip"
		>
			Pular para o conteúdo
		</a>
		<aside class="style-guide-sidebar">
			<NuxtLink
				to="/"
				class="style-guide-brand"
			>
				Flávia Freitas
				<span>IDENTIDADE DIGITAL</span>
			</NuxtLink>
			<div class="style-guide-nav-label">
				STYLE GUIDE
				<span>01</span>
			</div>
			<nav aria-label="Seções do style guide">
				<a
					v-for="(section, index) in sections"
					:key="section.id"
					:href="`#${section.id}`"
				>
					<span>0{{ index + 1 }}</span>
					{{ section.label }}
					<span class="style-guide-nav-arrow">↗</span>
				</a>
			</nav>
			<div class="style-guide-side-footer">
				<span class="style-guide-dot"></span>
				Flávia Freitas
				<p>
					Engenharia de software full stack
					<br />
					e web design.
				</p>
				<NuxtLink to="/">Voltar ao site ↗</NuxtLink>
			</div>
		</aside>

		<main
			id="conteudo"
			class="style-guide-main"
		>
			<header class="style-guide-topbar">
				<span>SISTEMA VISUAL / FUNDAMENTOS</span>
				<UiBadge tone="outline">Versão 1.0</UiBadge>
			</header>
			<section class="style-guide-hero">
				<div class="style-guide-hero-intro">
					<UiBadge tone="soft">Portfólio / Guia de estilo</UiBadge>
					<span
						class="style-guide-hero-star"
						aria-hidden="true"
					>
						✳
					</span>
				</div>
				<h1>
					Design com alma.
					<br />
					<em>Código com propósito.</em>
				</h1>
				<div class="style-guide-hero-bottom">
					<p>Cores, tipografia e componentes do portfólio de Flávia Freitas.</p>
					<a
						href="#cores"
						class="style-guide-explore"
					>
						Explore o guia
						<span aria-hidden="true">↓</span>
					</a>
				</div>
				<div
					class="style-guide-palette-ribbon"
					aria-label="Paleta da marca"
				>
					<span
						v-for="color in colors.slice(0, 6)"
						:key="color.token"
						:class="guideClass(color.token.slice(2))"
					></span>
				</div>
			</section>

			<section
				id="cores"
				class="style-guide-section"
			>
				<UiSectionHeading
					eyebrow="01 / Fundamentos"
					title="Cores que conversam."
					description="O lima marca as ações sobre fundo escuro. Coral e verde floresta dão contraste aos projetos. Clique em uma amostra para copiar a variável CSS."
				/>
				<div class="style-guide-color-grid">
					<button
						v-for="color in colors"
						:key="color.token"
						type="button"
						class="style-guide-color-card"
						:aria-label="`Copiar variável ${color.token}, ${colorValue(color.token)}`"
						@click="copy(color.token)"
					>
						<span
							:class="[
								'style-guide-swatch',
								guideClass(color.token.slice(2)),
								!color.dark && 'style-guide-light-text',
							]"
						>
							<span>{{ colorValue(color.token) }}</span>
							<span aria-hidden="true">↗</span>
						</span>
						<span class="style-guide-color-name">{{ color.name }}</span>
						<span class="style-guide-color-role">{{ color.role }}</span>
						<code>{{ color.token }}</code>
					</button>
				</div>
				<div class="style-guide-semantic">
					<div>
						<UiBadge tone="outline">Uso semântico</UiBadge>
						<h3>Escolha pela função.</h3>
						<p>
							Nos componentes, prefira tokens que dizem para que a cor serve. Assim, a
							identidade pode evoluir de um só lugar.
						</p>
					</div>
					<dl>
						<div
							v-for="pair in semanticColors"
							:key="pair[0]"
						>
							<dt>
								<code>{{ pair[0] }}</code>
							</dt>
							<dd>{{ pair[1] }}</dd>
						</div>
					</dl>
				</div>
			</section>

			<section
				id="tipografia"
				class="style-guide-section"
			>
				<UiSectionHeading
					eyebrow="02 / Tipografia"
					title="Personalidade no título. Clareza na leitura."
					description="Manrope define os títulos e o texto de leitura. IBM Plex Mono identifica etapas, etiquetas e trechos de código."
				/>
				<div class="style-guide-font-grid">
					<div class="style-guide-font-display">
						<span>01 / EXPRESSÃO</span>
						<strong>Aa</strong>
						<h3>Manrope</h3>
						<p>
							Títulos e texto de leitura.
							<br />
							Pesos 400 a 800
						</p>
					</div>
					<div class="style-guide-font-body">
						<span>02 / CLAREZA</span>
						<strong>Aa</strong>
						<h3>IBM Plex Mono</h3>
						<p>
							Etiquetas, metadados e código.
							<br />
							Peso 400
						</p>
					</div>
				</div>
				<div class="style-guide-type-scale">
					<div
						v-for="type in typeScale"
						:key="type.name"
						class="style-guide-type-row"
					>
						<div class="style-guide-type-meta">
							<strong>{{ type.name }}</strong>
							<span>{{ type.family }}</span>
							<span>{{ type.size }} rem</span>
							<code>.{{ type.class }}</code>
							<code>{{ type.token }}</code>
						</div>
						<p :class="type.class">{{ type.sample }}</p>
					</div>
				</div>
			</section>

			<section
				id="botoes"
				class="style-guide-section"
			>
				<UiSectionHeading
					eyebrow="03 / Ações"
					title="Um convite para o próximo passo."
					description="Formas arredondadas, rótulos diretos e estados claros. Passe o mouse, navegue com Tab e experimente os tamanhos."
				/>
				<div class="style-guide-button-table">
					<div class="style-guide-table-header">
						<span>VARIANTE</span>
						<span>PADRÃO</span>
						<span>DESABILITADO</span>
						<span>CARREGANDO</span>
					</div>
					<div
						v-for="variant in variants"
						:key="variant"
						class="style-guide-button-row"
					>
						<strong>{{ variantNames[variant] }}</strong>
						<UiButton
							:variant="variant"
							@click="showFeedback('Ação de exemplo executada.')"
						>
							Ver projeto
						</UiButton>
						<UiButton
							:variant="variant"
							disabled
						>
							Ver projeto
						</UiButton>
						<UiButton
							:variant="variant"
							loading
						>
							Carregando
						</UiButton>
					</div>
				</div>
				<p class="style-guide-note">
					O botão primário usa texto verde-tinta sobre lima. O contorno identifica a ação
					secundária.
				</p>
				<div class="style-guide-playground">
					<div class="style-guide-controls">
						<h3>Experimente do seu jeito.</h3>
						<label>
							Texto do botão
							<input
								v-model="buttonLabel"
								maxlength="48"
								placeholder="Ver projeto"
							/>
						</label>
						<div class="style-guide-select-row">
							<label>
								Variante
								<select v-model="selectedVariant">
									<option
										v-for="variant in variants"
										:key="variant"
										:value="variant"
									>
										{{ variantNames[variant] }}
									</option>
								</select>
							</label>
							<label>
								Tamanho
								<select v-model="selectedSize">
									<option value="sm">Pequeno · 44px</option>
									<option value="md">Médio · 50px</option>
									<option value="lg">Grande · 58px</option>
								</select>
							</label>
						</div>
						<label class="style-guide-checkbox">
							<input
								v-model="buttonDisabled"
								type="checkbox"
							/>
							Desabilitado
						</label>
					</div>
					<div class="style-guide-preview">
						<span>PRÉVIA INTERATIVA</span>
						<UiButton
							:variant="selectedVariant"
							:size="selectedSize"
							:disabled="buttonDisabled"
							:loading="loading"
							@click="previewAction"
						>
							{{ buttonLabel || 'Ver projeto' }}
						</UiButton>
						<code>variant="{{ selectedVariant }}" size="{{ selectedSize }}"</code>
					</div>
				</div>
			</section>

			<section
				id="componentes"
				class="style-guide-section"
			>
				<UiSectionHeading
					eyebrow="04 / Componentes"
					title="Pequenas peças. Muitas possibilidades."
					description="Componentes com conteúdo flexível, preparados para compor as próximas páginas sem perder a identidade."
				/>
				<div class="style-guide-specimen">
					<div class="style-guide-specimen-title">
						<h3>Badges & etiquetas</h3>
						<code>UiBadge</code>
					</div>
					<div class="style-guide-badges">
						<UiBadge>Sobre mim</UiBadge>
						<UiBadge tone="soft">Full stack</UiBadge>
						<UiBadge tone="outline">Web design</UiBadge>
					</div>
				</div>
				<div class="style-guide-cards">
					<UiCard
						title="Design de interfaces"
						description="Do protótipo no Figma à implementação responsiva."
					>
						<template #icon>✳</template>
						<template #footer>
							<UiButton
								variant="ghost"
								size="sm"
								@click="showFeedback('Exemplo de ação do card.')"
							>
								Ver projeto
								<span aria-hidden="true">↗</span>
							</UiButton>
						</template>
					</UiCard>
					<UiCard
						title="Órbita"
						tone="soft"
						description="Estudo de uma plataforma de gestão de projetos e equipes."
					>
						<UiBadge tone="outline">Estudo conceitual</UiBadge>
						<template #footer>
							<span class="style-guide-card-caption">
								Exemplo de composição · UiCard + UiBadge
							</span>
						</template>
					</UiCard>
				</div>
				<div class="style-guide-specimen">
					<div class="style-guide-specimen-title">
						<h3>Perguntas que abrem conversas</h3>
						<code>UiAccordion</code>
					</div>
					<div class="style-guide-faq">
						<UiAccordion
							question="Como começa um projeto?"
							open
						>
							Começamos pelos objetivos do site, pelo público e pelo conteúdo que
							precisa estar na página.
						</UiAccordion>
						<UiAccordion question="Posso atualizar o conteúdo?">
							Sim. Os textos, imagens e projetos podem ser editados no Sanity Studio.
						</UiAccordion>
					</div>
					<p class="style-guide-note">
						Clique para expandir. Também funciona com Tab, Enter e Espaço.
					</p>
				</div>
			</section>

			<section
				id="espacamento"
				class="style-guide-section"
			>
				<UiSectionHeading
					eyebrow="05 / Ritmo & forma"
					title="Espaçamento e cantos."
					description="A escala parte de 4px. Use cantos de 16px nos cards e formato de pílula nas ações."
				/>
				<div class="style-guide-spacing-list">
					<div
						v-for="step in spaceKeys"
						:key="step"
					>
						<code>--space-{{ step }}</code>
						<span
							:class="['style-guide-space-bar', guideClass(`space-${step}`)]"
						></span>
						<span>{{ step * 4 }}px</span>
					</div>
				</div>
				<div class="style-guide-shape-grid">
					<div
						v-for="shape in shapes"
						:key="shape.token"
					>
						<div :class="['style-guide-shape', guideClass(shape.token.slice(2))]"></div>
						<strong>{{ shape.name }}</strong>
						<code>{{ shape.token }}</code>
						<span>{{ shape.value }}</span>
					</div>
					<div>
						<div class="style-guide-shadow-sample"></div>
						<strong>Elevação leve</strong>
						<code>--shadow-card</code>
						<span>Cards e superfícies</span>
					</div>
				</div>
			</section>

			<section
				id="uso"
				class="style-guide-section style-guide-usage"
			>
				<UiSectionHeading
					eyebrow="06 / Pronto para reutilizar"
					title="Da base à próxima página."
					description="Use os componentes Vue e os tokens CSS para criar novas telas com a mesma linguagem visual."
				/>
				<div class="style-guide-usage-grid">
					<div>
						<h3>Uma única fonte de estilo.</h3>
						<p>
							<code>app/assets/scss/components/_variables.scss</code>
							<br />
							Guarda as cores, fontes, medidas e aliases semânticos.
						</p>
						<h3>Conteúdo livre. Forma consistente.</h3>
						<p>
							<code>app/components/ui/</code>
							<br />
							Botões, badges, cards, accordion e cabeçalhos de seção. Props e slots
							adaptam cada peça ao conteúdo.
						</p>
						<p class="style-guide-note">
							Esta página é independente do conteúdo do Sanity. Fontes hospedadas
							localmente.
						</p>
					</div>
					<div class="style-guide-code-block">
						<div>
							<span>Vue / exemplo de composição</span>
							<button
								type="button"
								@click="copy(example, 'Código')"
							>
								Copiar código ↗
							</button>
						</div>
						<pre><code>{{ example }}</code></pre>
					</div>
				</div>
			</section>
			<footer class="style-guide-footer">
				<span>
					Flávia Freitas
					<span aria-hidden="true">✳</span>
				</span>
				<p>Engenharia de software e web design.</p>
				<a href="#conteudo">Voltar ao topo ↑</a>
			</footer>
		</main>
		<div
			role="status"
			aria-live="polite"
			:class="['style-guide-toast', feedback && 'style-guide-toast-visible']"
		>
			{{ feedback }}
		</div>
	</div>
</template>
